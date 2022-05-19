#!/usr/bin/python3
"""script that shows the header value"""


if __name__ == "__main__":
    import urllib.request
    import sys

    with urllib.request.urlopen(sys.argv[1]) as response:
        print(response.info()['X-Request-Id'])
