const express = require ('express')
const CreateBooks = require('./BookDetails')
const {getBooks, getIdPass, SearchBar} = require('./CRUD/GetBooks')
const UpdateBooks = require('./CRUD/UpdateBooks')
const DeleteBooks = require('./CRUD/DeleteBooks')
const {CreateAdmin} = require('./Administrator')
const Protect = require('./Protect')
const CreateMember = require('./MembersDetails')
const { getmember, getIdsPass } = require('./CRUD/GetMember')
const UpdateMember = require('./CRUD/UpdateMember')
const DeleteMember = require('./CRUD/DeleteMembers')
const CreateOrders = require('./CRUD/Order/OrderDetails')
const { getOrders, getIdePass } = require('./CRUD/Order/GetOrders')
const UpdateOrders = require('./CRUD/Order/UpdateOrders')
const DeleteOrders = require('./CRUD/Order/DeleteOrders')
const toCompareAdmin = require('./CRUD/AdminCompare')
const CreateCart = require('./Cart/CartDetails')
const { getCart, getIdssPass } = require('./Cart/CartGet')
const DeleteCart = require('./Cart/DeleteCart')
const { CreateUser } = require('./User/User')
const toCompareUser = require('./User/UserCompare')
const UpdateCount = require('./Cart/CartUpdate')


const middleware = [Protect]
const router= express()

// Admin
router.route('/jwt').post(CreateAdmin)
router.route('/login').post(toCompareAdmin)

// User
router.route('/jwts').post(CreateUser)
router.route('/loginUser').post(toCompareUser)


// Books
router.route('/book').post(CreateBooks)
router.route('/get').get(getBooks)
router.route('/update/:id').put(UpdateBooks)
router.route('/delete/:id').delete(DeleteBooks)
router.route('/getId/:id').get(getIdPass)

//TeamMembers
router.route('/member').post(CreateMember)
router.route('/getmember').get(getmember)
router.route('/updatemember/:id').put(UpdateMember)
router.route('/getIds/:id').get(getIdsPass)
router.route('/deletes/:id').delete(DeleteMember)

// Orders
router.route('/order').post(CreateOrders)
router.route('/getorder').get(getOrders)
router.route('/updateorder/:id').put(UpdateOrders)
router.route('/getIdd/:id').get(getIdePass)
router.route('/deleteorder/:id').delete(DeleteOrders)

// Cart
router.route('/cartcreate').post(CreateCart)
router.route('/getcart').get(getCart)
router.route('/getIdea/:id').get(getIdssPass)
router.route('/deletecart/:id').delete(DeleteCart)
router.route('/updatecount/:itemId').put(UpdateCount)






module.exports =router
