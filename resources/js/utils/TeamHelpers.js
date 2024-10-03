export const isDefaultLogo = (logo) => {
    return (logo == '\\assets\\exploreemotions-logo.png');
};
export const ParseAgencyLogo = (logo) => {
    return logo ? logo : '/images/agency/no-logo.png';
};


export default {
    isDefaultLogo,
    ParseAgencyLogo
}