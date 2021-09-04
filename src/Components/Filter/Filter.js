import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {changeFilter} from '../../redux/phonebook/phonebook-action'

const Filter = ({value, onChange}) => (
    <label>
        <br />
          Find contacts by name <br /><br /> 
          <input type='text' value={value} onChange={onChange}></input>
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
    onChange: (event)=> dispatch(changeFilter(event.target.value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);