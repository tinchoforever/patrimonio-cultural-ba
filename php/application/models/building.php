<?php

class Building extends Eloquent
{
    public static $timestamps = false;

    public function photos()
    {
        return $this->has_many('Photo', 'bid');
    }

    public function messages()
    {
        return $this->has_many('Message', 'bid');
    }
}