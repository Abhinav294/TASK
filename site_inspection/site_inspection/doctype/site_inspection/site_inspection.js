// Copyright (c) 2025, abhinav and contributors
// For license information, please see license.txt

frappe.ui.form.on("Site Inspection", {
    quotation: function(frm) {
        if (!frm.doc.quotation) return;
        frappe.call({
            method: "frappe.client.get",
            args: {
                doctype: "Quotation",
                name: frm.doc.quotation
            },
            callback: function(r) {
                if (r.message) {
                    let quotation = r.message;
                    frm.clear_table("inspection_feedback");
                    (quotation.items || []).forEach(function(row) {
                        let item = frm.add_child("inspection_feedback");
                        item.item = row.item_code;
                    });
                    frm.refresh_field("inspection_feedback");
                }
            }
        });
    },


    












    status:function(frm){
        if (frm.doc.status=="Under Review"){
            frm.add_custom_button("Mark as Completed",function(){
                frm.set_value("status","Completed")
            })
        }    
    },






  
    





});









