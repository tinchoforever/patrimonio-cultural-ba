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
            $table->decimal('lat', 24, 20);
            $table->decimal('lng', 24, 20);
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