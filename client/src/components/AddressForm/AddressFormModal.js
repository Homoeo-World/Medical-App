import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Input, Stack, FormControl, Button, Modal } from 'native-base';

const AddressFormModal = ({ isVisible, onSave, onClose }) => {

  const [formData, setFormData] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = () => {
    console.log('formData: ', formData);
    onSave(formData); // Pass the address details to the onSave function

    //clear formdata
    setFormData({
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
    });   
  };


  return (
    <Modal isOpen={isVisible} >
      <Modal.Content maxWidth="400px" >
        {/* <Modal.CloseButton /> */}
        <Modal.Header>Add Address</Modal.Header>
        <Modal.Body>
          <FormControl>
            <Stack space={3}>
              <Stack>
                <FormControl.Label>
                  Address Line 1 <Text style={{ color: 'red' }}>*</Text>
                </FormControl.Label>
                <Input
                  variant="underlined"
                  p={2}
                  placeholder="Address Line 1"
                  value={formData.addressLine1}
                  onChangeText={(text) => handleInputChange('addressLine1', text)}
                />
              </Stack>
              <Stack>
                <FormControl.Label>
                  Address Line 2
                </FormControl.Label>
                <Input
                  variant="underlined"
                  p={2}
                  placeholder="Address Line 2"
                  value={formData.addressLine2}
                  onChangeText={(text) => handleInputChange('addressLine2', text)}
                />
              </Stack>
              <Stack>
                <FormControl.Label>
                  City <Text style={{ color: 'red' }}>*</Text>
                </FormControl.Label>
                <Input
                  variant="underlined"
                  p={2}
                  placeholder="City"
                  value={formData.city}
                  onChangeText={(text) => handleInputChange('city', text)}
                />
              </Stack>
              <Stack>
                <FormControl.Label>
                  State <Text style={{ color: 'red' }}>*</Text>
                </FormControl.Label>
                <Input
                  variant="underlined"
                  p={2}
                  placeholder="State"
                  value={formData.state}
                  onChangeText={(text) => handleInputChange('state', text)}
                />
              </Stack>
              <Stack>
                <FormControl.Label>
                  Pincode <Text style={{ color: 'red' }}>*</Text>
                </FormControl.Label>
                <Input
                  variant="underlined"
                  p={2}
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChangeText={(text) => handleInputChange('pincode', text)}
                />
              </Stack>
            </Stack>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button onPress={onClose} style={{marginRight:20 }}>Cancel</Button>
          <Button onPress={handleSubmit} isDisabled={formData.pincode === ''}>
            Save Address
          </Button>   
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default AddressFormModal;
