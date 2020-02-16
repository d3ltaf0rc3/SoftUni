const { expect } = require("chai");
const request = require("./request");

describe("Request Validator Unit Tests", () => {
  it("Valid input returns input unchanged", () => {
    expect(JSON.stringify(request({
      method: 'GET',
      uri: 'svn.public.catalog',
      version: 'HTTP/1.1',
      message: ''
    }))).to.equal(JSON.stringify({
      method: 'GET',
      uri: 'svn.public.catalog',
      version: 'HTTP/1.1',
      message: ''
    }));
  });

  it("Invalid method throws an error", () => {
    expect(() => request({
      method: 'OPTIONS',
      uri: 'svn.public.catalog',
      version: 'HTTP/1.1',
      message: ''
    })).to.throw(Error);
  });
  it("Invalid URI throws an error", () => {
    expect(() => request({
      method: 'GET',
      uri: 'invalid,uri',
      version: 'HTTP/1.1',
      message: ''
    })).to.throw(Error);
  });
  it("Invalid version throws an error", () => {
    expect(() => request({
      method: 'GET',
      uri: 'svn.public.catalog',
      version: 'HTTP/3.1',
      message: ''
    })).to.throw(Error);
  });
  it("Invalid message throws an error", () => {
    expect(() => request({
      method: 'GET',
      uri: 'svn.public.catalog',
      version: 'HTTP/1.1',
      message: 'Invalid<>'
    })).to.throw(Error);
  });
  //text saturation
  it("No method throws an error", () => {
    expect(() => request({
      uri: 'svn.public.catalog',
      version: 'HTTP/1.1',
      message: 'Invalid<>'
    })).to.throw(Error);
  });
  it("No uri throws an error", () => {
    expect(() => request({
      method: 'GET',
      version: 'HTTP/1.1',
      message: 'Invalid<>'
    })).to.throw(Error);
  });
  it("No version throws an error", () => {
    expect(() => request({
      method: 'GET',
      uri: 'svn.public.catalog',
      message: 'Invalid<>'
    })).to.throw(Error);
  });
  it("No message throws an error", () => {
    expect(() => request({
      method: 'GET',
      uri: 'svn.public.catalog',
      version: 'HTTP/1.1',
    })).to.throw(Error);
  });
});