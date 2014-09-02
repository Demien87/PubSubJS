/*jslint white:true*/
/*global
	define
*/
define([
	'../../node_modules/jquery/dist/jquery',
	'../../jquery.pubsub',
	'../helper'
], function(
	jquery,
	pubsub,
	TestHelper
){

	'use strict';

	TestHelper.verifyPubSubAPI(pubsub);
});
