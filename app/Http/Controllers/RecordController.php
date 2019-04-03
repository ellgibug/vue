<?php

namespace App\Http\Controllers;

use App\Record;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $records = Record::all();
        return response()->json([
            "records" => $records
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $received_record = $request->all();
        if(isset($received_record['data']['type']) && $received_record['data']['type'] == 'request'){
            if(isset($received_record['data']['attributes']['name']) && isset($received_record['data']['attributes']['phone'])){
                $record = new Record();
                $record->name = $received_record['data']['attributes']['name'];
                $record->phone = $received_record['data']['attributes']['phone'];
                $record->saveOrFail();
                return response()->json([
                    "record_id" => $record->id
                ], 201);
            } else {
                return response()->json([
                ], 500);
            }
        } else {
            return response()->json([
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function show(Record $record)
    {
        return response()->json([
            "record" => $record
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function edit(Record $record)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $record = Record::findOrFail($id);

        $record->status = $request->status;
        $record->description = $request->description;
        $record->saveOrFail();

        return response()->json([
            "record" => $record
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $record = Record::findOrFail($id);
        $record->delete();

        return response()->json([

        ], 200);
    }
}
