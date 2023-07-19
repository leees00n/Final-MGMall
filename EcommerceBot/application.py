from flask import Flask, render_template, request, jsonify
import boto3
from collections import deque
from datetime import datetime
application = Flask(__name__)
dynamodb = boto3.resource('dynamodb', region_name='ap-northeast-2', aws_access_key_id='AKIARWKDYXU5AF5MOEIP', aws_secret_access_key='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')
table = dynamodb.Table('buy_product')


@application.route("/")
def product():
    return render_template("product.html")


@application.route("/buy", methods=['POST', 'GET'])
def buy():
    if request.method == 'POST':
        buy_product = request.form
        buy_list = []
        for key, value in buy_product.items():
            if value == 'on':
                buy_list.append(key)
            elif key.find('수량') != -1:
                if value == '':
                    continue
                buy_list.append(int(value))
        buy_list = deque(buy_list)

        buy_data = {}
        while len(buy_list) != 0:
            buy_data['name'] = buy_list.popleft()
            buy_data['count'] = buy_list.popleft()
            buy_today = datetime.today()
            buy_date = str(buy_today.year)+'-'+str(buy_today.month)+'-'+str(buy_today.day)
            buy_data['date'] = buy_date
            table.put_item(Item=buy_data)
            buy_data = {}
        return render_template("buy.html", result=buy_product)


@application.route("/chatbot", methods=["POST", "GET"])
def chatbot():
    if request.method == 'POST':
        input_message = request.json.get('inputValue')
        client = boto3.client('lexv2-runtime', region_name='ap-northeast-2', aws_access_key_id='AKIARWKDYXU5AF5MOEIP', aws_secret_access_key='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')
        botId = "GI0U5JJUYN"
        botAliasId = "TSTALIASID"
        localeId = "ko_KR"
        sessionId = "100"
        response = client.recognize_text(
            botId=botId,
            botAliasId=botAliasId,
            localeId=localeId,
            sessionId=sessionId,
            text=input_message
        )

        if len(response['messages']) == 2:
            print(response['messages'][0]['content'])
            print(response['messages'][1]['content'])
            message_response1 = response['messages'][0]['content']
            message_response2 = response['messages'][1]['content']
            return jsonify({"message_response1": message_response1, "message_response2": message_response2})

        else:
            message_response1 = response['messages'][0]['content']
            return jsonify({"message_response1": message_response1})
    else:
        return render_template('chatbot.html')


@application.route("/buy_product")
def buy_product():
    return render_template('buy_product.html')


if __name__ == "__main__":
    application.run(host='0.0.0.0')
