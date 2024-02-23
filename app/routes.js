//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here
router.post('/personal-details-answer', function(req, res) {
    var givenName = req.session.data['given-name']
    var surName = req.session.data['sur-name']
    var dateOfbirth = req.session.data['date-of-birth']


    if(givenName === "" || surName === ""){
        res.redirect('/ineligible-personal-details')
    } else (
        res.redirect('/driving-license')
    )
})

router.post('/uploaded-file-driving-licence', function(req, res){
    var fileName = req.session.data['file-driving-licence'].toString()


    if(fileName.toString().split(".")[1] !== "pdf"){
        res.redirect('/ineligible-file-driving-licence')
    } else {
        res.redirect('/file-compliance')
    }
})