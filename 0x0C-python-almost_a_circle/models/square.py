#!/usr/bin/python3
"""Module for the class Rectangle"""


from multiprocessing.sharedctypes import Value
from models.rectangle import Rectangle


class Square(Rectangle):
    """Class Base inherits from Rectangle"""

    def __init__(self, size, x=0, y=0, id=None):
        """Constructor of square"""
        super().__init__(size, size, x, y, id)

    @property
    def size(self):
        """property of size"""
        return self.width

    @size.setter
    def size(self, value):
        """setter of size but unsing the attribute of Rectangle:
        -first width because we want the error validation of its"""
        self.width = value
        self.height = value
