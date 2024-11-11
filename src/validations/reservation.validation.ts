import * as yup from 'yup';

export const createReservationSchema = yup.object().shape({
    checkIn: yup.string().required('checkIn is required'),
    checkOut: yup.string().required('checkOut is required'),
    touristPlanId: yup.string().typeError('touristPlanId must be a id string').required('touristPlanId is required'),
})