import React from "react";

export let serverURI = "//develop.app";
if(process.env.NODE_ENV === 'production') {
    serverURI = "//product.app";
}
