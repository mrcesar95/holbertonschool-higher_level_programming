#!/usr/bin/python3
"""Module for the class Base"""
import json


class Base:
    """Class Base"""

    __nb_objects = 0

    def __init__(self, od=None):
        """Constructor of Base"""
        if id is not None:
            self.id = id
        else:
            Base.__nb_objects += 1
            self.id = Base.__nb_objects

    @staticmethod
    def to_json_string(list_dictionaries):
        """Method that returns the JSON string representation
        of list_dictionaries
        -list_dictionaries: must be alist of dictionary
        -Return: string of dictionary in json format"""
        if list_dictionaries is None:
            return "[]"
        else:
            string = json.dumps(list_dictionaries)
            return string
