/// <meta "uuid"="8fe8bc89-fc6b-4624-a1cd-f36661fb9af8"/>

import { _decorator, Component } from "cc";

@_decorator.ccclass
export class DecoratorsExample extends Component {
  @_decorator.property
  a = 1;
}