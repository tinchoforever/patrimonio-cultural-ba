<?php

class Create_Buildings_Table {

	/**
	 * Make changes to the database.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('buildings', function($table) {
            $table->create();
            $table->increments('id');
            $table->string('name');
            $table->float('lat');
            $table->float('lng');
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