import React, {Component} from 'react';
import {
    FormStepThree,
    HelpSection,
    Select,
    Option,
    HelpButtons,
    HelpButton,
    InputOrg,
    ErrorSpan
} from './Step3Styles';
class Step3 extends Component {
    render() {
        if (this.props.formStep !== 3) return null;

        const {handleLocalChange, local} = this.props;
        return (
            <FormStepThree>
                <HelpSection>Lokalizacja:

                <Select value={local}
                        onChange={handleLocalChange}>
                    <Option value={local}
                            hidden>{local}
                    </Option>
                    <Option value="Warszawa">Warszawa</Option>
                    <Option value="Kraków">Kraków</Option>
                    <Option value="Wrocław">Wrocław</Option>
                    <Option value="Poznań">Poznań</Option>
                </Select>
                {this.props.error && <ErrorSpan>{this.props.error}</ErrorSpan>}
                </HelpSection>

                <HelpSection>
                    Komu chcesz pomóc?

                    <HelpButtons>
                        <HelpButton value="kidsClicked" 
                                    onClick={this.props.handleValueChange('kidsClicked')}
                                    clicked={this.props.kidsClicked}
                                    >dzieciom</HelpButton>
                        <HelpButton value="momsClicked" 
                                    onClick={this.props.handleValueChange('momsClicked')}
                                    clicked={this.props.momsClicked}
                                    >samotnym matkom</HelpButton>
                        <HelpButton value="homelessClicked" 
                                    onClick={this.props.handleValueChange('homelessClicked')}
                                    clicked={this.props.homelessClicked}
                                    >bezdomnym</HelpButton>
                        <HelpButton value="disabledClicked" 
                                    onClick={this.props.handleValueChange('disabledClicked')}
                                    clicked={this.props.disabledClicked}>niepełnosprawnym</HelpButton>
                        <HelpButton value="eldersClicked" 
                                    onClick={this.props.handleValueChange('eldersClicked')}
                                    clicked={this.props.eldersClicked}
                                    >osobom starszym</HelpButton>
                    </HelpButtons>
                    
                </HelpSection>

                <HelpSection>
                    Wpisz nazwę konkretnej organizacji (opcjonalne)
                    <InputOrg onChange={this.props.handleFindInput}/>
                </HelpSection>
            </FormStepThree>
        )
    }
}

export default Step3;