import React, {Component} from 'react';
import { 
    MainFormMessage,
    MainFormBoldMessage,
    MainFormStepCounter,
    MainFormContainer, 
    MainFormTag, 
    MainFormButtons, 
    PrevButton, 
    NextButton,
    SubmitButton
} from './MainFormStyles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const text = [
    'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
    'Wszystkie rzeczy do oddania spakuj w 60l worki. Dokładną instukcje znajdziesz u nas na stronie.',
    'Jeśli wiesz, komu chcesz pomóc, mozesz wpisać nazwę tej organizacji w wyszukiwarce.',
    'Podaj adres oraz termin odbioru rzeczy które oddajesz.'
]

class MainForm extends Component {

    //poprawic walidacje
    state = {
            formStep: 3,
            error: '',
            checkedItems: new Map(),
            value: '- wybierz -',
            local: '- wybierz -',
            kidsClicked: false,
            momsClicked: false,
            homelessClicked: false,
            disabledClicked: false,
            eldersClicked: false,
            findInput: '',
            formMessage: text[0],
            address: {
                street: '',
                city: '',
                postcode: '',
                phone: ''
            },
            deadline: {
                date: '',
                hour: '',
                message: ''
            }

        }


        //previous and next step with validation on the next step
    next = () => {
        let currentStep = this.state.formStep;
        if (currentStep === 1) {
            this.handleValidateCheckboxes();
            }

        if (currentStep === 2) {
            this.handleValidateSelect();
        }

        if (currentStep === 3) {
            this.handleValidateLocal();
        }
        if (currentStep === 4) {
            this.setState({
                formStep: 5
            })
        }
    }


    prev = () => {
        let currentStep = this.state.formStep;

        currentStep = currentStep <= 1 ? 1: currentStep - 1;
        this.setState({
            formStep: currentStep
        });
    }


    //show/hide buttons

    get prevButton() {
        let currentStep = this.state.formStep;

        if (currentStep >= 2) {
            return <PrevButton onClick={this.prev}>Powrót</PrevButton>;
        }

        return null;
    }

    get nextButton() {
        let currentStep = this.state.formStep;

        if (currentStep <= 4) {
            return <NextButton onClick={this.next}>Dalej</NextButton>
        }   else if (currentStep === 5) {
            return <SubmitButton></SubmitButton>
        }

        return null;
    }
    //checkbox methods

    handleCheckbox = (e) => {
        const item = e.target.name;
        const checked = e.target.checked;
        this.setState(prevState => ({
            checkedItems: prevState.checkedItems.set(item, checked),
            name: item
        }));
    }

    // checkbox validation  
    handleValidateCheckboxes = () => {
        const {checkedItems} = this.state;
        if (checkedItems.size === 0) {
            this.setState({
                formStep: 1,
                error: 'You didn\'t check any checkboxes'
            });
            
        } else {
            this.setState({
                formStep: 2,
                formMessage: text[1]
            })
        }
    }

    //methods for select fields (localization and number of bags)

    handleSelectChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleLocalChange = (e) => {
        this.setState({
            local: e.target.value
        });
    }

    //select validation
    handleValidateSelect = () => {
        const {value} = this.state;
        if (value === '- wybierz -') {
            this.setState({
                formStep: 2,
                error: 'You didn\'t select any option'
            });
            
        } else {
            this.setState({
                formStep: 3,
                formMessage: text[2]
            });
        }
    }

    handleValidateLocal = () => {
        const {local} = this.state;

        if (local === '- wybierz -') {
            this.setState({
                formStep: 3,
                error: 'Nie wybrałeś miasta'
            });
        } else {
            this.setState({
                formStep: 4,
                formMessage: text[3]
            });
        }
    }

    //search orgs 

    handleFindInput = (e) => {
        const input = e.target.value;

        this.setState({
            findInput: input
        });
    }


    //help buttons 

    handleValueChange = (key) => () => {
        this.setState(prevState =>({
            [key]: !prevState[key]
        }));
    }
    
    //address form 

    handleChangeAddressInput = (key) => (e) => {
        const input = e.target;
        this.setState({
            address: {
                ...this.state.address,
               [key]: input.value
            }
        });

        
    }

    handleChangeDeadlineInput = (key) => (e) => {
        this.setState({
                deadline: {
                    ...this.state.deadline,
                    [key]: e.target.value
                }
        });
    }

    //form submitssion

    submitForm = (e) => {
        let currentStep = this.state.formStep;
        e.preventDefault();
        if (currentStep === 5) {
            console.log('form submitted');
        }
    }
    
    render() {
        const {formStep, error, checkedItems, value, local} = this.state;
        const {street, city, postcode, phone} = this.state.address;
        const {date, hour, message} = this.state.deadline;
        return (
            <MainFormContainer>
                <MainFormMessage>
                    <MainFormBoldMessage>Wazne!</MainFormBoldMessage>
                    {this.state.formMessage}
                </MainFormMessage>
                <MainFormStepCounter>Krok {formStep}/4</MainFormStepCounter>
                <MainFormTag onSubmit={this.submitForm}>
                    <Step1 formStep={formStep}
                           handleValidateCheckboxes={this.handleValidateCheckboxes}
                           error={error}
                           checkedItems={checkedItems}
                           handleCheckbox={this.handleCheckbox}
                           />
                    <Step2 formStep={formStep}
                            value={value}
                            handleSelectChange={this.handleSelectChange}
                            error={error}
                    />
                    <Step3 formStep={formStep}
                            local={local}
                            handleLocalChange={this.handleLocalChange}
                            error={error}
                            handleValueChange={this.handleValueChange}
                            kidsClicked={this.state.kidsClicked}
                            momsClicked={this.state.momsClicked}
                            homelessClicked={this.state.homelessClicked}
                            disabledClicked={this.state.disabledClicked}
                            eldersClicked={this.state.eldersClicked}
                            handleFindInput={this.handleFindInput}
                            />
                    <Step4 formStep={formStep}
                           error={error}
                           handleChangeAddressInput={this.handleChangeAddressInput}
                           handleChangeDeadlineInput={this.handleChangeDeadlineInput}
                           street={street}
                           city={city}
                           postcode={postcode}
                           phone={phone}
                           date={date}
                           hour={hour}
                           message={message}
                    />
                    <Step5 formStep={formStep}
                           handleFindInput={this.handleFindInput} 
                           findInput={this.state.findInput}
                    />
                    <MainFormButtons>
                        {this.prevButton}
                        {this.nextButton}
                    </MainFormButtons>
                </MainFormTag>

                
            </MainFormContainer>
        )
    }
}

export default MainForm;