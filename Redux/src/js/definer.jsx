import React from "react"
import cookie from "react-cookie"

export var serverURI = "//develop.app";
if(!DEV)
	serverURI = "//product.app"