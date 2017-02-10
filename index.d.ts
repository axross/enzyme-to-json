import { ShallowWrapper, ReactWrapper, CheerioWrapper } from 'enzyme';

type SerializeTarget<P, S> = ShallowWrapper<P, S> | ReactWrapper<P, S> | CheerioWrapper<P, S>;

interface SerializedJson {
  type: string;
  props: { [propName: string]: string };
  children: null | Array<string | SerializedJson>;
  $$typeof?: any;
}

interface ToJsonStatic {
  <P, S>(target: SerializeTarget<P, S>): SerializedJson;
}

declare const toJson: ToJsonStatic;

export default toJson;