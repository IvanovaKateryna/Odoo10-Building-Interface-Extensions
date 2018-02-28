# -*- coding: utf-8 -*-
{
    'name': "Pet Store Odoo 10",

    'summary': """Sell pet toys""",

    'description': """
Pet Store
=================

A wonderful application to sell pet toys.""",

    'category': 'Tools',
    'version': '0.1',

    'depends': [
        'base',
        'sale_stock',
    ],

    'data': [
        "views/petstore.xml",
        "views/petstore_data.xml",
        "views/oepetstore.message_of_the_day.csv",
    ],

    'depends': ['sale_stock'],
    'qweb': ['static/src/xml/*.xml'],
    'application': True,
}
