<?php

class Remove_Old_Lon {

	/**
	 * Make changes to the database.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('buildings', function($table) {

			$table->drop_column('latitude');
			$table->drop_column('longitude');

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