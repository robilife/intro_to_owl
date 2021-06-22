# -*- coding:utf-8 -*-
# __manifest__.py
{
    'name': 'Introduction to OWL in Odoo - Part 1',
    'summary': 'Provide an exemple module for OWL',
    'description': 'Provide an exemple module for OWL',
    'author': 'Oocademy',
    'website': 'http://www.oocademy.com',
    'category': 'Tutorials',
    'version': '14.0.0.1',
    'depends': ['base', 'sale_management'],
    'demo': [],
    'data': [
        'data/assets.xml',
        'views/view.xml'
    ],
    'qweb': ['static/src/js/components/PartnerOrderSummary.xml']
}