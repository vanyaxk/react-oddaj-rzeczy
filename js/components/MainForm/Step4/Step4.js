import React, {Component} from 'react';

import {
    FormStepFour,
    StepFourHeader,
    AddressHeader,
    AddressInputs,
    AddressLabel,
    DeadlineInputs,
    AddressInput,
    DeadlineHeader,
    DeadlineInput,
    DeadlineMessage,
    DeadlineLabel
} from './Step4Styles'

class Step4 extends Component {
    render() {
        if (this.props.formStep !== 4) return null;
        console.log(this.props);
        const {
            handleChangeAddressInput,
            handleChangeDeadlineInput,
            street,
            city,
            postcode,
            phone,
            date,
            hour,
            message
        } = this.props;
        return (
            <>
            <StepFourHeader>Podaj adres oraz termin odbioru rzeczy przez kuriera</StepFourHeader>
            <FormStepFour>
                <AddressInputs>
                <AddressHeader>Adres odbioru</AddressHeader>
                    <AddressLabel>Ulica <AddressInput value={street} 
                                                      onChange={handleChangeAddressInput('street')}
                                                      />
                    </AddressLabel>
                    <AddressLabel>Miasto <AddressInput onChange={handleChangeAddressInput('city')}
                                                        value={city}
                                                        />
                    </AddressLabel>
                    <AddressLabel>Kod Pocztowy <AddressInput    value={postcode}
                                                                onChange={handleChangeAddressInput('postcode')}
                                                        />
                    </AddressLabel>
                    <AddressLabel>Numer telefonu <AddressInput  value={phone}
                                                                onChange={handleChangeAddressInput('phone')}
                                                                />
                    </AddressLabel>
                </AddressInputs>

                
                <DeadlineInputs>    
                <DeadlineHeader>Termin odbioru</DeadlineHeader>
                    <DeadlineLabel>Data <DeadlineInput  value={date}
                                                        onChange={handleChangeDeadlineInput('date')}
                                                        />
                    
                    </DeadlineLabel>
                    <DeadlineLabel>Godzina <DeadlineInput   value={hour}
                                                            onChange={handleChangeDeadlineInput('hour')} 
                                                        />
                    
                    </DeadlineLabel>
                    <DeadlineLabel>Uwagi dla kuriera <DeadlineMessage value={message}
                                                                      onChange={handleChangeDeadlineInput('message')}
                                                        />
                    
                    </DeadlineLabel>
                </DeadlineInputs>
            </FormStepFour>
            </>
        )
    }
}

export default Step4;