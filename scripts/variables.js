var React = require("react");
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation; //mixin
var History = ReactRouter.History;
var IndexRoute = require("react-router");

import {Link} from "react-router";
import createHashHistory from 'history/lib/createHashHistory'
const history = createHashHistory({ queryKey: false })