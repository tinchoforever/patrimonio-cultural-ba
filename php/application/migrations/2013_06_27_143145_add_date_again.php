<?php

class Add_Date_Again {

	/**
	 * Make changes to the database.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('buildings', function($table) {
			// created_at | updated_at DATETIME
			$table->timestamp('created_at');
			$table->timestamp('updated_at');

        });
        Schema::table('messages', function($table) {
			// created_at | updated_at DATETIME
			$table->timestamp('created_at');
			$table->timestamp('updated_at');
        });

        Schema::table('photos', function($table) {
			// created_at | updated_at DATETIME
			$table->timestamp('created_at');
			$table->timestamp('updated_at');
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