export interface ResponseApi<T> {
    success: boolean;
    data:    T;
}

export interface ServiceDateEpsTopik {
    rozilik:        boolean;
    pin:            string;
    pay:            Pay[] | null;
    photo_file:     string;
    pasport_num:    string;
    sur_name:       string;
    first_name:     string;
    middle_name:    string;
    region:         string;
    city:           string;
    street_address: string;
    phone:          string;
    email:          string;
    pasport_file:   string;
    paycheck_file:  PaycheckFile | null;
}

export interface Pay {
    id:         number;
    pin:        string;
    passport:   string;
    s_name:     string;
    f_name:     string;
    m_name:     string;
    citizen_id: number;
    data:       PayData;
}

export interface PayData {
    bhm:            string;
    bank_id:        number;
    bank_name:      string;
    paid_date:      Date;
    sum_total:      string;
    country_id:     number;
    paid_amount:    string;
    transaction_id: string;
}

export interface PaycheckFile {
}