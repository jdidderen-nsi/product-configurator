/** @odoo-module **/

import VariantMixin from "@website_sale/js/sale_variant_mixin";

const original_getOptionalCombinationInfoParam =
    VariantMixin._getOptionalCombinationInfoParam;
VariantMixin._getOptionalCombinationInfoParam = function ($product) {
    const result = original_getOptionalCombinationInfoParam($product);
    const config_session_id = $("#product_details input.config_session_id").val();
    if (config_session_id) result.config_session_id = config_session_id;
    return result;
};

return VariantMixin;

