#!/usr/bin/python3
"""script that displays X-Request-Id in the response header"""

if __name__ == "__main__":
    import requests
    import sys
    response = requests.get('https://intranet.hbtn.io/status')
    print("X-Request-Id: {}".format(response.headers.get('X-Request-Id')))
