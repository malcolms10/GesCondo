export const getAntdRequiredFieldRule = (message : string) =>{
    return[
        {
            required: true,
            message,
        },
    ];
};