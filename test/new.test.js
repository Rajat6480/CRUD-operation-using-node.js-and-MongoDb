var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
const sinon = require('sinon');
const {handleGetAllUsers} = require('../controllers/user')
const server = require('../index')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)


// describe ('Aspect check',function(){

//     let userName = "Rajat";
//     let myList = {
//         Item :[{
//             name : "Rajat",
//             prn: 211411,
//         }],
//         Id : 4012,
//     }
//     it("check string",function(){
//         assert.typeOf(userName,'string');
//     })

//     it("check equal",function(){
//         assert.equal(userName,"Rajat")
//     })
//     it("Check length",function(){
//         assert.lengthOf(myList.Item,1)
//     })
// })

// describe("Should check",function(){
//     let userName = "Rajat";
//     let myList = {
//         Item :[{
//             name : "Rajat",
//             prn: 211411,
//         }],
//         Id : 4012,
//     }

//     it('Check string',function(){
//         userName.should.be.a('string')
//     })
//     it('check equal',function(){
//         userName.should.equal('Rajat')
//     })
//     it('length check',function(){
//         myList.should.have.property('Item').with.lengthOf(1);
//     })
// })

// describe('check expect',function(){
//     let userName = "Rajat";
//     let myList = {
//         Item :[{
//             name : "Rajat",
//             prn: 211411,
//         }],
//         Id : 4012,
//         address : {
//             cell : [
//             9191919191,2323232323,
//         ]}
//     }
//     it('string check',function(){
//         expect(userName).to.be.a('string');
//     })
//     it('equal check',function(){
//         expect(userName).to.equal('Rajat')
//     })
//     it('length check',function(){
//         expect(userName).to.lengthOf(5)
//     })
//     it('object length',function(){
//         expect(myList).to.have.property('Item').with.lengthOf(1)
//     })
//     it('api object match',function(){
//         expect(myList).to.have.all.keys('Item','Id','address')
//     })
    
//     it('phone number',function(){
//         expect(myList).to.have.nested.property('address.cell[1]')
//     })
//     it('phone number match',function(){
//         expect(myList).to.have.nested.include({'address.cell[1]' : 2323232323})
//     })

// })

describe('get post api testing', function(){

    it(' handleGetAllUsers ',function(done){
        chai.request(server).get('/api/user').end((err,res)=>{
            expect(res.status).to.be.equal(200);
            done();
        })
    })

})