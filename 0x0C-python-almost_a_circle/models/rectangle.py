#!usr/bin/python3
"""Module for the class Rectangle"""


from models.base import Base


class Rectangle(Base):
    """Class Base"""

    def __init__(self, width, height, x=0, y=0, id=None):
        """Constructor of Rectangle"""
        self.width = width
        self.height = height
        self.x = x
        self.y = y
        super().__init__(id)
