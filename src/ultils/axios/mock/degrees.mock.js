import dataDegrees from '../../../mock/degrees/get-all.mock.json'
const degreesMock = (mock) => {
    mock.onGet('/degree').reply(200,{
        degrees: dataDegrees,
    })
}

export default degreesMock