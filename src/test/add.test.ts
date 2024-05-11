import {add} from "../util/add.ts";

describe('add 함수 테스트', () => {
 it('1+1은 3일 것이다.', () => {
     expect(add(1,1)).toBe(3)
 })
})