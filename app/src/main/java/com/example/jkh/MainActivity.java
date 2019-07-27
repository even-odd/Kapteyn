package com.example.jkh;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import java.util.List;

import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.GET;
import retrofit2.Call;


public class MainActivity extends AppCompatActivity {
    private static final String TAG = "MyApp";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public class Message {

        private long id;
        private long time;
        private String text;
        private String image;

        // getters and setters

    }
    public interface MessagesApi {

        @GET("messages1.json")
        Call<List<Message>> messages();
    }


    Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("https://rawgit.com/startandroid/data/master/messages/")
            .addConverterFactory(GsonConverterFactory.create())
            .build();

    MessagesApi messagesApi = retrofit.create(MessagesApi.class);







    @Override
    protected void onResume() {
        super.onResume();
        Call<List<Message>> messages = messagesApi.messages();
        messages.enqueue(new Callback<List<Message>>() {
            @Override
            public void onResponse(Call<List<Message>> call, Response<List<Message>> response) {
                Log.d(TAG,"response " + response.body().size());
            }

            @Override
            public void onFailure(Call<List<Message>> call, Throwable t) {

            }
        });
    }
}
