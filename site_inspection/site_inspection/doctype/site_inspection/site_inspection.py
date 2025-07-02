# Copyright (c) 2025, abhinav and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class SiteInspection(Document):
  


	
    def validate(self):
        for i in self.inspection_feedback:
            if i.inspection_rating == "Poor":
                frappe.msgprint(f"Item {i.item} has Poor rating.")
        

 

    def on_submit(self):
        if self.create_follow_up_task==1:
            quotation = frappe.get_doc("Quotation", self.quotation)

            task = frappe.new_doc("Task")
            task.custom_reference_name = self.name
            task.subject=self.inspection_notes

            task.save()

    

        
    