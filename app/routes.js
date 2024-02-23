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
    var dateOfbirth = req.session.data['date-of-birth-day']

    console.log(dateOfbirth)

    if(givenName === "" && surName === ""){
        
    } else (
        res.redirect('/driving-license')
    )
})