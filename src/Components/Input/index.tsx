import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';

import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, MSGError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const IRef = useRef<HTMLInputElement>(null);

  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: IRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  const handleFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocus(false);
    setIsBlur(!!IRef.current?.value);
  }, []);

  return (
    <Container isError={!!error} isFocused={isFocus} isFilled={isBlur}>
      {Icon && <Icon size={20} />}

      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        defaultValue={defaultValue}
        ref={IRef}
        {...rest}
      />

      {error && (
        <MSGError title={error}>
          <FiAlertCircle size={30} color="#F52020" />
        </MSGError>
      )}
    </Container>
  );
};

export default Input;
