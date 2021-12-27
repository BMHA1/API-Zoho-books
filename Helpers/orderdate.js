


module.exports.filterData = (customers) => {
    let copyCustomers = [...customers]
    for (let i = 0; i < copyCustomers.length; i++) {
        console.log(typeof copyCustomers[i].ach_supported)
        copyCustomers[i].custom_fields = "[string]"
        copyCustomers[i].custom_field_hash = "{string}"
    }
    return copyCustomers
}