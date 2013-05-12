<?php

class Create_Photos_Table {

    /**
     * Make changes to the database.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('photos', function($table) {
            $table->create();
            $table->increments('id');
            $table->integer('bid');
            $table->string('file');
        });
    }

    /**
     * Revert the changes to the database.
     *
     * @return void
     */
    public function down()
    {
        //
    }

}