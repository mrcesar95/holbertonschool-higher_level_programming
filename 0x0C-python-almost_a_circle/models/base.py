#!/usr/bin/python3
"""Module for the class Base"""
import json
from unittest import result


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

    @staticmethod
    def save_to_file(cls, list_objs):
        """Methodthat writes the JSON string
        representation of list_objs to a file"""
        filename = cls.__name__ + ".json"
        result = []
        if list_objs:
            for objs in list_objs:
                dictionary = objs.to_dictionary()
                result.append(dictionary)
        with open(filename, "w", encoding="utf-8") as file:
            file.write(cls.to_json_string(result))
