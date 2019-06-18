import React, {Component} from 'react';
import {
    FormStepThree,
    Label,
    Select,
    Option,
    InputOrg
} from './Step3Styles';
class Step3 extends Component {
    render() {
        if (this.props.formStep !== 3) return null;

        const {handleLocalChange, local} = this.props;
        return (
            <FormStepThree>
                <Label>Lokalizacja:

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
                </Label>

                <Label>
                    Komu chcesz pomóc?


                </Label>

                <Label>
                    Wpisz nazwę konkretnej organizacji (opcjonalne)
                    <InputOrg />
                </Label>
            </FormStepThree>
        )
    }
}

export default Step3;