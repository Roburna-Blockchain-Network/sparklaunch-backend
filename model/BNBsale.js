var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BNBsaleSchema = new Schema({
   
    saleToken: {
        name: String,
        symbol: String,
        address: {type:String, require}
    },

    saleParams: {
        softCap:Number,
        hardCap:Number,
        price:Number,
        startDate:Date,
        endDate:Date,
        minBuy:Number,
        maxBuy:Number,
        firstRelease:Number,
        eachRelease:Number,
        vestingDays: Number

    },

    saleLinks: {

        logo: String,
        fb:String,
        git:String,
        insta:String,
        reddit:String,

        web: String,
        twitter: String,
        telegram: String,
        discord: String,
        youtube: String
    },

    saleDetails:{
        saleAddress:{type:String, default:'0x0000000000000000000000000000000000000000'},
        saleOwner: {type:String, default:'0x0000000000000000000000000000000000000000'},
        listingDate: {type:Date, default:()=> Date.now()},
        description:String,
        saleID:Number,
        deployed:{type:Boolean,default:()=> false},
        featured:{type:Boolean,default:()=> false},
    } 
});

module.exports = mongoose.model('bnbsale', BNBsaleSchema);