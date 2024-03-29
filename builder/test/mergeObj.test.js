import assert from "node:assert/strict"
import mergeObj from "../../src/utils/mergeObj.js"
import { checkType } from "./util.js"

describe("mergeObj", () => {
    it("should be a function", () => {
        assert.ok(checkType(mergeObj, Function))
    })

    it("should returns the destination object", () => {
        const src = {}
        const dest = {}
        assert.equal(mergeObj(dest, src), dest)
    })

    it("should copies basic type value in source object to the destination object", () => {
        const src  = { a: 1 }
        const dest = {}
        mergeObj(dest, src)
        assert.equal(dest.a, 1)
    })

    it("should merges object type value in source object to the destination object", () => {
        const src  = { a: {b: {c: 1}, d: 2} }
        const dest = { a: {e: 3} }
        mergeObj(dest, src)
        assert.equal(dest.a.e, 3)
        assert.equal(dest.a.d, 2)
        assert.equal(dest.a.b.c, 1)
    })
})
