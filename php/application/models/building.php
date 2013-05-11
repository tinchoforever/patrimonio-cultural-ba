<?php

class Building extends Eloquent
{
    public function photos()
    {
        return $this->has_many('Photo');
    }

    public function messages()
    {
        return $this->has_many('Message');
    }
}