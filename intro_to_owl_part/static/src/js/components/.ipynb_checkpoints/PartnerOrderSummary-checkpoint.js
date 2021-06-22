odoo.define("intro_to_owl_part.PartnerOrderSummary", function (require) { 
    const FormRenderer = require("web.FormRenderer"); 
    const { Component } = owl;
    const { ComponentWrapper } = require("web.OwlCompatibility");
  
     class PartnerOrderSummary extends Component { 
         
     }; 
  
     Object.assign(PartnerOrderSummary, { 
         template: "intro_to_owl_part.PartnerOrderSummary" 
     });
    
    FormRenderer.include({
        async _render(){
            await this._super(...arguments);
            for(const element of this.el.querySelectorAll(".o_partner_order_summary")){
                (new ConponentWrapper(this, PartnerOrderSummary))
                .mount(element)
            }
        }
    });
 });   