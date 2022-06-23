import dataCertificatesMock from '../../../mock/certificates/get-all.mock.json'
const certificatesMock = (mock) => {
    mock.onGet('/certificate').reply(200,{
        certificates: dataCertificatesMock,
    })
}

export default certificatesMock