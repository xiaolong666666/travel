let defaultCity = '北京'
try {
    defaultCity = localStorage.city ? localStorage.city : defaultCity
} catch (e) {
    console.log(e.message)
}

export default {
    city: defaultCity
}