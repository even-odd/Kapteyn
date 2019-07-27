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
import retrofit2.http.POST;


public class MainActivity extends AppCompatActivity {
    private static final String TAG = "MyApp";

    public class Expression {

         long a;
         long b;
         long c;

}

    public interface ServerApi {

        @GET("index.php/?a=2&b=5")
        Call<Expression> expression();

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.i(TAG, "onCreate");
    }

    @Override
    protected void onResume() {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://u0773476.cp.regruhosting.ru/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        ServerApi messagesApi = retrofit.create(ServerApi.class);

        Call<Expression> messages = messagesApi.expression();

        messages.enqueue(new Callback<Expression>() {
            @Override
            public void onResponse(Call<Expression> call, Response<Expression> response) {
                Log.i(TAG,"response " + response.body().c);
            }

            @Override
            public void onFailure(Call<Expression> call, Throwable t) {
                Log.i(TAG,"failure " + t);
            }
        });

        super.onResume();
    }
}
